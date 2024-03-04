import contentfulExport from "contentful-export";
import contentfulImport from "contentful-import";
import fs from "fs-extra";
import readline from "readline";
import process from "process";

const commandLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

commandLine.question("Input your management token: ", (managementToken) => {
  commandLine.question(
    "Input the space ID you want to migrate from: ",
    (spaceId) => {
      const options = {
        spaceId,
        managementToken,
        rawProxy: true,
        maxAllowedLimit: 50,
        skipWebhooks: true,
        skipRoles: true,
        exportDir: "exported",
      };

      contentfulExport(options)
        .then((result) => {
          const exported = fs.readdirSync("./exported");
          const latest = exported.map((file) => {
            return {
              file,
              mtime: fs.statSync(`./exported/${file}`).mtime.getTime(),
            };
          });
          latest.sort((a, b) => b.mtime - a.mtime);
          const latestFile = latest[0].file;
          console.log(`Exported: ${latestFile}`);
          const exportedData = fs.readJsonSync(`./exported/${latestFile}`);
          commandLine.question("Input the space ID you want to migrate to: ",
            (spaceId) => {
              console.log("Importing...");
              const options = {
                spaceId,
                managementToken,
                maxAllowedLimit: 50,
                content: exportedData,
              };
              contentfulImport(options)
                .then((result) => {
                  console.log("Imported!");
                })
                .catch((error) => {
                  console.log("Oh no! Some error occurred!", error.errors[0].error);
                });
            });
        })
        .catch((error) => {
          console.log("Oh no! Some error occurred!", error.errors[0].error);
        });

      commandLine.close();
    }
  );
});
