module EventsHelpers
  def split_event_list
    now = Time.now
    newevents = t_data.events.events.select {|event| Time.parse(event.t) > now}.sort {|e1, e2| Time.parse(e1.t) <=> Time.parse(e2.t)}.each {|e| e.active = true }
    oldevents = t_data.events.events.select {|event| Time.parse(event.t) < now}.sort {|e1, e2| Time.parse(e2.t) <=> Time.parse(e2.t)}.each {|e| e.active = false }

    newevents + oldevents
  end

  def split_event_list_all
    now = Time.now
    newevents = t_data.events.events.select {|event| Time.parse(event.t) > now}.sort {|e1, e2| Time.parse(e1.t) <=> Time.parse(e2.t)}.each {|e| e.className = 'active' }
    oldevents = t_data.events.events.select {|event| Time.parse(event.t) < now}.sort {|e1, e2| Time.parse(e2.t) <=> Time.parse(e2.t)}.each {|e| e.className = 'not-active' }

    newevents + oldevents
  end
end
