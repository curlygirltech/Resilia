# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Notification.destroy_all

@notification1 = Notification.create!(title: "501(c)3 Approved for Jrue & Lauren Impact Fund ", content: "follow up with CFO on next steps")
@notification2 = Notification.create!(title: "Nonprofit Coaching", content: "consultation for new  prospects")
@notification3 = Notification.create!(title: "Greater New Orleans Foundation Grant Proposal", content: "meeting with The GNOF")

puts 'notications created'