
export const handleSaveAd = (
  e,
  id,
  acountUser,
  dataBase,
  setUserAdSaveLists,
  handleToastError
) => {
  e.preventDefault();
  let usersDataBase = JSON.parse(localStorage.getItem("usersDataBase"));


  // 🚫 Check if user is not logged in
  if (!acountUser) {
    handleToastError("لطفاً ابتدا وارد حساب کاربری خود شوید!");
    return;
  }

  // 🔍 Find the ad by its ID
  const result = dataBase.find((item) => item.id === id);
  if (!result) return;

  // 👤 Get current user from localStorage
  const user = JSON.parse(localStorage.getItem("user")) || {};
  let userAdSaveLists = user.userAdSaveLists || [];

  // ❓ Check if ad is already saved
  const isAlreadySaved = userAdSaveLists.some((ad) => ad.id === id);

  // ♻️ Update the saved ad list (add or remove)
  const updatedSaveList = isAlreadySaved
    ? userAdSaveLists.filter((ad) => ad.id !== id)
    : [...userAdSaveLists, result];

  // ✅ Update current user in localStorage
  const updatedUser = {
    ...user,
    userAdSaveLists: updatedSaveList,
  };
  localStorage.setItem("user", JSON.stringify(updatedUser));
  setUserAdSaveLists(updatedSaveList);

  // 🧠 Update the user in usersDataBase
  const userIndex = usersDataBase.findIndex((u) => u.id === user.id);
  if (userIndex !== -1) {
    usersDataBase[userIndex] = {
      ...usersDataBase[userIndex],
      userAdSaveLists: updatedSaveList,
    };

    // 💾 Save updated usersDataBase back to localStorage
    localStorage.setItem("usersDataBase", JSON.stringify(usersDataBase));
  }
};
