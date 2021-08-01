import * as SDK from "contentful";

const contentful = SDK.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "ryakgqidrqml",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "J8HjtD-l4tEGhfU2ZHtyFuCTy_EwNghvH1IRi0sOs28",
});
export default contentful;
