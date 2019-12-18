200.times do
    name = Faker::TvShows::RickAndMorty.character
    location = Faker::TvShows::RickAndMorty.location
    quote = Faker::TvShows::RickAndMorty.quote
    avatar = Faker::Avatar.image(slug: name, size: "100x400", format: "png", set: "set1")

    Friend.create(name: name, location: location, quote: quote, avatar: avatar )
end

    puts "200 friends seeded"
