module SocialHelpers
  # name in %w(github link twitter linkedin)
  def social_icon(name, href)
    icon = image_path("social/#{name}.svg".strip)
    <<-HEREDOC
      <a target="_blank" href="#{href}">
        <img src="#{icon}" width="35" height="35">
      </a>
    HEREDOC
  end
end
