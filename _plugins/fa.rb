module Jekyll
  class FontAwesomeTag < Liquid::Tag

    def render(context)
      if tag_contents = determine_arguments(@markup.strip)
        icon_class, icon_extra = tag_contents[0], tag_contents[1]
        icon_tag(icon_class, icon_extra)
      else
        raise ArgumentError.new <<-eos
Syntax error in tag 'icon' while parsing the following markup:

  #{@markup}

Valid syntax:
  for icons: <i class="fa fa-camera-retro"></i>
  for icons with size/spin/rotate: <i class="fa fa-camera-retro fa-lg"></i>
eos
      end
    end

    private

    def determine_arguments(input)
      matched = input.match(/\A(\S+) ?(\S+)?\Z/)
      [matched[1].to_s.strip, matched[2].to_s.strip] if matched && matched.length >= 3
    end

    def icon_tag(icon_class, icon_extra = nil)
      if icon_extra.empty?
        "<i class=\"fa #{icon_class}\"></i>"
      else
        "<i class=\"fa #{icon_class} #{icon_extra}\"></i>"
      end
    end
  end
end

Liquid::Template.register_tag('icon', Jekyll::FontAwesomeTag)
