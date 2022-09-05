import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function ClearData() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "POSTLAPTOP",
      payload: {
        laptop: {
          laptop_image: "",
          laptop_name: "",
          laptop_brand_id: "",
          laptop_ram: "",
          laptop_hard_drive_type: "",
          laptop_cpu: "",
          laptop_cpu_cores: "",
          laptop_cpu_threads: "",
          laptop_state: "",
          laptop_price: "",
          laptop_purchase_date: "",
        },
      },
    });
    dispatch({
      type: "POSTUSER",
      payload: {
        user: {
          name: "",
          surname: "",
          team: "",
          position: "",
          email: "",
          phone_number: "",
        },
      },
    });
  }, []);

  return;
}

export default ClearData;
