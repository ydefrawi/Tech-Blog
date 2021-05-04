const User = require('./User');
const Post = require('./Post');
const Comment = require ('./Comment')

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
})



module.exports = {Comment, User, Post };
