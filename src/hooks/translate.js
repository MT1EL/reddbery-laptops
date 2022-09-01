const words = {
  name: "სახელი",
  surname: "გვარი",
  email: "ემაილი",
  phone_number: "ტელ. ნომერი",
  laptop_name: "ლეპტოპის სახელი",
  laptop_brand: "ლეპტოპის ბრენდი",
  hard_drive_type: "მეხსიერების ტიპი",
  price: "ფასი",
  purchase_date: "შეძენის რიცხვი",
  state: "მდგომარეობა",
  CPUname: "CPU",
  CPUcores: "CPU-ს ბირთვი",
  CPUthreads: "CPU-ს ნაკადი",
  RAM: "RAM",
  new: "ახალი",
  used: "მეორადი",
};

const translator = (word) => words[word];

export default translator;
