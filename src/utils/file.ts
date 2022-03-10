import fs from "fs";

export const deleteFile = async(filename: string) => {

  //this function stat verifies wheter already exist a file at some directory.
  try {
    await fs.promises.stat(filename);
  } catch {
    return;
  }
  //this unlink function has the responsability to remove a file that already exist.
  await fs.promises.unlink(filename)

}
