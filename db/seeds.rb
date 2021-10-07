# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Deleting old data..."
Theme.destroy_all
PreviewPage.destroy_all
User.destroy_all

puts

puts "Seeding Users..."
user1 = User.create(username: "Cameryn")
user2 = User.create(username: "Ashley")

puts

puts "Seeding Themes..."
theme1 = Theme.create(name: "Light")
theme2 = Theme.create(name: "Dark")
theme3 = Theme.create(name: "Colorful")

puts

puts "Seeding Page Previews..."
page1 = PreviewPage.create(title: "Hello World", body_text: "This is some example body text", code: "this is some example code", image_url: "https://www.hdnicewallpapers.com/Walls/Big/Rainbow/Rainbow_on_Mountain_HD_Image.jpg", theme_id: theme1.id, user_id: user1.id)
page2 = PreviewPage.create(title: "Hello World", body_text: "This is some example body text", code: "this is some example code", image_url: "http://imaging.nikon.com/lineup/coolpix/p/p7000/img/sample/img_02_b.jpg", theme_id: theme2.id, user_id: user1.id)
page3 = PreviewPage.create(title: "Hello World", body_text: "This is some example body text", code: "this is some example code", image_url: "http://planetside.co.uk/wp-content/uploads/2016/08/Terragen-Mountain-Side-by-Jeff-Boser-1280x1920.jpg", theme_id: theme3.id, user_id: user2.id)

puts

puts "Seeding complete!"