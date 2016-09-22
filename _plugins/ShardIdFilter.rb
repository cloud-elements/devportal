module Jekyll
  module ShardIdFilter
    def shard_id(input)
      dir = input.split('/')[0...-1].join('/')
      dir.gsub('/', '_').gsub('-', '_')
    end
  end
end

Liquid::Template.register_filter(Jekyll::ShardIdFilter)
