export const authenticate = async (req: any, res: any, admin: any) => {
  // Get header as string with new line.
  // Bearer on first line and Id token on second line.
  try {
    const tokenId = req.get("Authorization").split("Bearer ")[1];
    return await admin.auth().verifyIdToken(tokenId);
  } catch {
    res.status(401).send("Not Authorized User");
  }
};
