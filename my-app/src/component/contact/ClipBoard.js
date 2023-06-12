import React, { useEffect, useState } from "react";
import "../../assets/scss/ClipBoard/clipBorad.css";

function ClipBoard() {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [isScrolledToSection, setIsScrolledToSection] = useState(false);

  useEffect(() => {
    const section = document.getElementById("clipboard");

    const handleScroll = () => {
      if (
        !isScrolledToSection &&
        window.innerHeight + window.pageYOffset >=
          section.offsetTop + section.offsetHeight - 260
      ) {
        setIsScrolledToSection(true);
        setTimeout(() => {
          incrementValue3();
        }, 1);
        setTimeout(() => {
          incrementValue2();
        }, 37);
        setTimeout(() => {
          incrementValue1();
        }, 75);
        setTimeout(() => {
          incrementValue();
        }, 150);
      }
    };

    const incrementValue3 = () => {
      if (value3 >= 3000) {
        return;
      }

      setValue3((prevValue) => {
        const newValue = prevValue + 14;
        return newValue >= 3000 ? 3000 : newValue;
      });

      setTimeout(incrementValue3, 1);
    };

    const incrementValue2 = () => {
      if (value2 >= 427) {
        return;
      }

      setValue2((prevValue) => {
        const newValue = prevValue + 10;
        return newValue >= 427 ? 427 : newValue;
      });

      setTimeout(incrementValue2, 37);
    };

    const incrementValue1 = () => {
      if (value1 >= 95) {
        return;
      }

      setValue1((prevValue) => {
        const newValue = prevValue + 8;
        return newValue >= 95 ? 95 : newValue;
      });

      setTimeout(incrementValue1, 75);
    };

    const incrementValue = () => {
      if (value >= 45) {
        return;
      }

      setValue((prevValue) => {
        const newValue = prevValue + 5;
        return newValue >= 45 ? 45 : newValue;
      });

      setTimeout(incrementValue, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolledToSection]);

  return (
    <section id="clipboard">
      <div className="col-12">
        <div className="clipboard_background">
          <div className="clipboard_text">
            <h4 className="clipboard_text_h2">
              Code Academy həm arzuladığınız sahəni əlçatan edir, <br />
              həm də gələcək karyera inkişafınız üçün lazımı bilik və bacarıqları formalaşdırır.
            </h4>
            <div className="counts">
              <div className="count">
                <span id="stu">{value3}</span>
                <p>Tələbə</p>
              </div>
              <div className="count">
                <span id="cr">{value2}</span>
                <p>karyerasını <br />yaxşılaşdırıb</p>
              </div>
              <div className="count">
                <span id="boss">{value1}</span>
                <p>rəhbər <br />vəzifələrdə işləyir</p>
              </div>
              <div className="count">
                <span id="up">{value}</span>
                <p>vəzifəsi artıb</p>
              </div>
            </div>
          </div>
        </div>
        <div className="background-overlay"></div>
      </div>
    </section>
  );
}

export default ClipBoard;