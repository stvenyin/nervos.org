module I18nHelpers
  def i18n_data
    data.send(I18n.locale.to_sym)
  end

  alias t_data i18n_data
end
