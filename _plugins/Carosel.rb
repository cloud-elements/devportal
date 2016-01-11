module Jekyll
  module Carousel
    def carousel(text)
      text.gsub(%r{<li>}i, '<div class="col-md-3">').gsub(%r{</li>}i, '</div>').gsub(%r{<ul>}i, '<div class="row">').gsub(%r{</ul>}i, '</div>')
    end
  end
end

Liquid::Template.register_filter(Jekyll::Carousel)
