import { Account, Client, ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.aoras",
  projectId: "66496a6a0009255de412",
  databaseId: "6649ade6002816aa74d3",
  useCollectionId: "6649ae27001d041317cf",
  videoCollectionId: "6649ae96001addcc2788",
  storageId: "6649d12d003912e97f2f",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};

{
  /**
export const config = {
  //endpoint: "https://cloud.appwrite.io/v1",
  endpoint: "'http://localhost/v1'",
  platform: "com.aora",
  projectId: "6642d424002329106fe4",
  databaseId: "664300c30019a09cf004",
  userCollectionId: "664301580021a0df3648",
  videoCollectionId: "66430c8f000f460b81b7",
  storageId: "66432312002018c8155e",
};

import { Client } from "react-native-appwrite";
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint("config.endpoint") // Your Appwrite Endpoint
  .setProject("config.projectId") // Your project ID
  .setPlatform("config.platform"); // Your application ID or bundle ID.

*/
}
