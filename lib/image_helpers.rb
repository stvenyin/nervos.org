module ImageHelpers
  def parse_srcset_from_data(srcset)
    srcset.map do |image_src, width|
      "#{image_path(image_src)} #{width}"
    end.join(", ")
  end
end
