// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
  title: "Notes",
  description:
    "A simple, lightweight, and flexible note-taking template for Eleventy.",
  editThisNote: {
    url: "https://github.com/xi-orionis/uni-notes/edit/{{branch}}/{{file}}",
  },
  
  theme: {
    color: "lime",
  },

  notes: {
    pathPrefix: "/notes",
  },
  customProperties: {
    properties: [
      {
        name: "course"
      },
      {
        path: "props",
        options: {
          date: {
            locale: "en-US",
          },
        },
      },
    ],
  },
  sidebar: {
    sections: [
      {
        label: "Basics",
        groups: [
          {
            query: createNotesQuery({
              pattern: "^/[^/]+$",
            }),
          },
        ],
      },
      {
        label: "Physics",
        groups: [
          {
            label: "114",
            query: {
              sort: [["date", "desc"]], // Sort by date in descending order (latest first)
              filter: [
                ["filePathStem", "isNotEqual", "/index"], // Exclude '/index'
                ["filePathStem", "matches", "/114/"], // Match the pattern '/114/'
              ]
            },
          },
          {
            label: "104",
            expanded: false,
            query: {
              sort: [["date", "desc"]], // Sort by date in descending order (latest first)
              filter: [
                ["filePathStem", "isNotEqual", "/index"], // Exclude '/index'
                ["filePathStem", "matches", "/104/"], // Match the pattern '/104/'
              ]
            },
          },
        ],
      },
      
      {
        label: "Chemistry",
        groups: [
          {
            label: "110",
            query: {
              sort: [["date", "desc"]], // Sort by date in descending order (latest first)
              filter: [
                ["filePathStem", "isNotEqual", "/index"], // Exclude '/index'
                ["filePathStem", "matches", "/110/"], // Match the pattern '/110/'
              ]
            },
          },
          {
            label: "101",
            expanded: false,
            query: {
              sort: [["date", "desc"]], // Sort by date in descending order (latest first)
              filter: [
                ["filePathStem", "isNotEqual", "/index"], // Exclude '/index'
                ["filePathStem", "matches", "/101/"], // Match the pattern '/101/'
              ]
            },
          },
        ],
      },      

      {
        label: "Guides",
        groups: [
          {
            label: "Writing Notes",
            query: createNotesQuery({
              pattern: "^/Writing/",
              tree: {
                replace: {
                  "^/\\w+": "",
                },
              },
            }),
          },
          {
            label: "Organizing Notes",
            query: createNotesQuery({
              pattern: "^/Organizing/",
            }),
          },
          {
            label: "Core Features",
            query: createNotesQuery({
              pattern: "^/Features/",
              tree: {
                replace: {
                  "^/\\w+": "",
                },
              },
            }),
          },
          {
            label: "Deployment",
            query: createNotesQuery({
              pattern: "^/Deployment/",
            }),
          },
        ],
      },
      {
        label: "Releases",
        groups: [
          {
            query: createNotesQuery({
              pattern: "^/Releases/",
            }),
          },
        ],
      },
    ],
  },
  tags: {
    map: {
      "dynamic-content": "dynamic content",
    },
  },
});
