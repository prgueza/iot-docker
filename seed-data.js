db.usergroups.insert({
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'Administración General',
  users: [],
  groups: [],
  images: [],
  devices: [],
  displays: [],
  description: 'Grupo de administradores',
  __v: 0,
});

const usergroupId = db.usergroups.findOne()._id;
const usergroupUrl = `${process.env.API_URL}usergroups/${usergroupId}`;

db.usergroups.update({ _id: usergroupId }, { $set: { url: usergroupUrl } });

db.users.insert({
  admin: 'true',
  name: 'admin',
  login: 'admin',
  password: '$2a$10$jo8suAC4QqJsH6AZLFJzPubDwX2/yhvEaTP35PUCg5gSiQkWB3DgO',
  email: 'admin@test.com',
  url: `${process.env.API_URL}users/5bf6ea7966e3e90a99dc47fc`,
  createdAt: new Date(),
  updatedAt: new Date(),
  __v: 0,
  userGroup: usergroupId,
});

const userId = db.users.findOne()._id;
const userUrl = `${process.env.API_URL}users/${userId}`;

db.users.update({ _id: userId }, { $set: { url: userUrl } });

db.usergroups.update({ _id: usergroupId }, { $addToSet: { users: userId } });
