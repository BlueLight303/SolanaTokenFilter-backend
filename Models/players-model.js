let posts = require("../Data/players.json");
const filename = "./Data/players.json";
const helper = require("../Helpers/helper.js");

// Method READ All
//
function getPosts() {
  return new Promise((resolve, reject) => {
    if (posts.length === 0) {
      reject({
        message: "no database available",
        status: 202,
      });
    }

    resolve(posts);
  });
}

// Method READ by Params Id
//
function getPost(id) {
  return new Promise((resolve, reject) => {
    helper
      .mustBeInArray(posts, id)
      .then((post) => resolve(post))
      .catch((err) => reject(err));
  });
}

// Method CREATE
//
// function insertPost(newPost) {
//   return new Promise((resolve, reject) => {
//     const id = { id: helper.getNewId(posts) };
//     const date = {
//       createdAt: helper.newDate(),
//       updatedAt: helper.newDate(),
//     };

//     newPost = { ...id, ...date, ...newPost };
//     posts.push(newPost);
//     helper.writeJSONFile(filename, posts);
//     resolve(newPost);
//   });
// }

// Method PATCH
//
// function updatedPost(id, newPost) {
//   return new Promise((resolve, reject) => {
//     helper
//       .mustBeInArray(posts, id)
//       .then((post) => {
//         const index = posts.findIndex((p) => p.id == post.id);
//         id = { id: post.id };
//         const date = {
//           createdAt: post.createdAt,
//           updatedAt: helper.newDate(),
//         };
//         posts[index] = { ...id, ...date, ...newPost };
//         helper.writeJSONFile(filename, posts);
//         resolve(posts[index]);
//       })
//       .catch((err) => reject(err));
//   });
// }

// Method DELETE
//
// function deletePost(id) {
//   return new Promise((resolve, reject) => {
//     helper
//       .mustBeInArray(posts, id)
//       .then(() => {
//         posts = posts.filter((p) => p.id !== id);
//         helper.writeJSONFile(filename, posts);
//         resolve();
//       })
//       .catch((err) => reject(err));
//   });
// }

module.exports = {
  // insertPost,
  getPosts,
  getPost,
  // updatedPost,
  // deletePost,
};
