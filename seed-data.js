db.usergroups.insert({
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "Administración General",
  users: [],
  groups: [],
  images: [],
  devices: [],
  displays: [],
  description: "Grupo de administradores",
  __v: 0
})

const usergroup_id = db.usergroups.findOne()._id
const usergroup_url = "http://iot-db:4000/userGroups/" + usergroup_id

db.usergroups.update({ _id: usergroup_id}, { $set: { url: usergroup_url } })

db.users.insert({
  admin: "true",
  name: "admin",
  login: "admin",
  password: "$2a$10$jo8suAC4QqJsH6AZLFJzPubDwX2/yhvEaTP35PUCg5gSiQkWB3DgO",
  email:"admin@test.com",
  url: "http://iot-db:4000/users/5bf6ea7966e3e90a99dc47fc",
  createdAt: new Date(),
  updatedAt: new Date(),
  __v: 0,
  userGroup: userGroup_id
})

const user_id = db.users.findOne()._id
const user_url = "http://iot-db:4000/users/" + user_id

db.users.update({ _id: user_id}, { $set: { url: user_url } })

db.usergroups.update({ _id: usergroup_id }, { $addToSet: { users: user_id } })
