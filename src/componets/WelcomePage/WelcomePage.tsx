import Head from "./Head";
import HowToGetStarted from "./HowToGetStarted";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import toast from "react-hot-toast";
import { useEffect } from "react";
function WelcomePage() {
  const mockedEmails = [
    "joh****y43@gmail.com",
    "ama****n12@yahoo.com",
    "mic****r89@outlook.com",
    "dav****x21@hotmail.com",
    "sar****e77@mail.com",
    "chr****a65@gmail.com",
    "emm****z34@yahoo.com",
    "oli****q90@proton.me",
    "luc****m18@icloud.com",
    "ben****t52@gmx.com",
    "jac****w73@gmail.com",
    "eth****p11@outlook.com",
    "mia****d87@yahoo.com",
    "ale****k49@mail.com",
    "sop****n36@hotmail.com",
    "dan****c28@gmail.com",
    "gra****j91@icloud.com",
    "har****u64@proton.me",
    "ell****v15@yahoo.com",
    "isa****f82@gmx.com",
    "mat****s47@gmail.com",
    "ava****h30@outlook.com",
    "lea****r95@mail.com",
    "luk****b13@hotmail.com",
    "zoe****y68@gmail.com",
    "noa****g22@yahoo.com",
    "hen****l84@icloud.com",
    "eve****m59@proton.me",
    "sam****x17@mail.com",
    "lil****q76@gmail.com",
    "aid****n41@outlook.com",
    "rub****p93@yahoo.com",
    "eli****c25@hotmail.com",
    "fre****w61@gmx.com",
    "ivy****t08@gmail.com",
    "fin****d74@mail.com",
    "ros****k38@icloud.com",
    "tom****a96@yahoo.com",
    "haz****j53@outlook.com",
    "leo****u19@hotmail.com",
    "ann****v88@gmail.com",
    "joe****f31@proton.me",
    "kat****s70@mail.com",
    "max****h46@yahoo.com",
    "nic****r14@gmx.com",
    "cla****b85@gmail.com",
    "pau****m62@icloud.com",
    "vic****x27@outlook.com",
    "ada****q99@hotmail.com",
    "rya****y44@yahoo.com",
    "car****m81@gmail.com",
    "deb****k16@outlook.com",
    "fel****a57@yahoo.com",
    "geo****t93@mail.com",
    "hol****v24@hotmail.com",
    "ian****p71@gmail.com",
    "jan****d39@icloud.com",
    "kel****x86@yahoo.com",
    "lor****j18@proton.me",
    "mar****h54@gmx.com",
    "nat****r20@gmail.com",
    "owe****b77@outlook.com",
    "pam****q63@mail.com",
    "que****w45@yahoo.com",
    "rob****n12@hotmail.com",
    "ste****c90@gmail.com",
    "tia****m28@icloud.com",
    "urs****f69@proton.me",
    "val****y35@yahoo.com",
    "wil****t84@mail.com",
    "xav****p17@outlook.com",
    "yas****k52@gmail.com",
    "zac****d98@hotmail.com",
    "abi****v41@yahoo.com",
    "bra****j76@gmx.com",
    "cel****h23@gmail.com",
    "don****r65@icloud.com",
    "ela****b11@mail.com",
    "fra****q87@proton.me",
    "gab****w30@yahoo.com",
    "han****n74@hotmail.com",
    "ind****c48@gmail.com",
    "jas****m92@outlook.com",
    "kai****f26@mail.com",
    "lia****y83@yahoo.com",
    "mon****t14@icloud.com",
    "neo****p68@gmail.com",
    "ora****k50@hotmail.com",
    "pet****d97@proton.me",
    "qui****v37@yahoo.com",
    "rex****j72@mail.com",
    "sia****h19@gmail.com",
    "ted****r85@outlook.com",
    "uma****b32@hotmail.com",
    "vio****q66@yahoo.com",
    "wes****w21@gmx.com",
    "xim****n79@gmail.com",
    "yan****c43@icloud.com",
    "zel****m94@mail.com",
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 20);
    let index = randomIndex;
    let length = mockedEmails.length;
    const interval = setInterval(() => {
      if (index !== length || index < length) {
        const paidEmailMassage = `${mockedEmails[index]} just grabbed the DMG`;
        toast.success(paidEmailMassage);
        index++;
      } else {
        index = Math.floor(Math.random() * 20);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Head />
      <HowToGetStarted />
      <AboutMe />
      <Footer />
    </>
  );
}
export default WelcomePage;
