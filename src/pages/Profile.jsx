import React from "react";
import NavbarCom from "../components/NavbarCom";
import MyAccountSidebarCom from "../components/MyAccountSidebarCom";
import FooterCom from "../components/FooterCom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Profile() {
  return (
    <>
      <NavbarCom />
      <section className="w-full py-10 h-auto grid grid-cols-3 px-20">
        <div className="sticky top-[12%]">
          <MyAccountSidebarCom />
        </div>
        <div className="box2 w-[100%] col-span-2">
          <Box
            component="form"
            //   sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            className="grid grid-cols-2 gap-5 w-full"
          >
            <TextField
              id="outlined-number"
              label="First Name *"
              type="text"
              className="col-span-1"
              sx={{
                "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
              }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <TextField
              id="outlined-number"
              label="Last Name *"
              type="text"
              className="col-span-1"
              sx={{
                "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
              }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <TextField
              id="outlined-number"
              label="Email Id *"
              type="text"
              className="col-span-2"
              sx={{
                "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
              }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <TextField
              id="outlined-number"
              label="Mobile Number *"
              type="text"
              className="col-span-2"
              sx={{
                "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
              }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <div className="col-span-2 flex flex-col gap-1">
              <TextField
                id="outlined-number"
                label="DOB"
                type="date"
                className="col-span-2"
                sx={{
                  "& .MuiInputLabel-root": { fontSize: "1.25rem" }, // Adjust size
                }}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
              <span className="text-gray-600">
                Share your DOB to get special gifts on the 1st day of your
                birthday month
              </span>
            </div>
            <div className="col-span-2">
                <h1 className="font-bold text-xl">Gender</h1>
              <div className="flex gap-5 -ms-4 mt-2 items-center">
                <div className="flex gap-2 w-[30%]">
                  <input
                    type="radio"
                    value={"Male"}
                    name="gender"
                    id="g_male"
                    className="opacity-0"
                  />
                  <label
                    htmlFor="g_male"
                    className="cursor-pointer w-full text-center py-1 px-4 border rounded-sm text-gray-700 focus:ring-2 focus:ring-blue-200 transition-colors border-black bg-yellow-400 text-lg"
                  >
                    Male
                  </label>
                </div>
                <div className="flex gap-2 w-[30%]">
                  <input
                    type="radio"
                    value={"Male"}
                    name="gender"
                    id="g_female"
                    className="opacity-0"
                  />
                  <label
                    htmlFor="g_female"
                    className="cursor-pointer w-full text-center py-1 px-4 border rounded-sm text-gray-700 focus:ring-2 focus:ring-blue-200 transition-colors border-black bg-yellow-400 text-lg"
                  >
                    Female
                  </label>
                </div>
                <div className="flex gap-2 w-[30%]">
                  <input
                    type="radio"
                    value={"Male"}
                    name="gender"
                    id="g_other"
                    className="opacity-0"
                  />
                  <label
                    htmlFor="g_other"
                    className="cursor-pointer w-full text-center py-1 px-4 border rounded-sm text-gray-700 focus:ring-2 focus:ring-blue-200 transition-colors border-black bg-white text-lg"
                  >
                    Other
                  </label>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </section>

      <section>
        <FooterCom visibleExtra={false} />
      </section>
    </>
  );
}

export default Profile;
