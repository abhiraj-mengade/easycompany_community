import styles from "../styles/Home.module.css";
import MobilPhoneMockup from "../components/MobilePhoneMockup";
import PizzaOrderScreen from "../components/PizzaOrder";
import { Container, Row, Col } from "react-bootstrap";
import dynamic from "next/dynamic";
import Typewriter from "typewriter-effect";
let Globe = () => null;
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function Home() {
  const [countries, setCountries] = useState({ features: [] });
  const [globeSize, setGlobeSize] = useState(400);

  useEffect(() => {
    fetch("/ne_110m_admin_0_countries.geojson")
      .then((res) => res.json())
      .then(setCountries);
  }, []);

  useEffect(()=> {
    if( window.innerWidth<=768){
      setGlobeSize(window.innerWidth)
    }else if( window.innerWidth<=1000){
      setGlobeSize(700)
    }
    else{
      setGlobeSize(600)
    }
    window.addEventListener('resize', ()=> {
      if( window.innerWidth<=768){
        setGlobeSize(window.innerWidth);
      }
      else if( window.innerWidth<=1000){
        setGlobeSize(700);
      }
      else{
        setGlobeSize(600);
      }
    })
 }, []);

  return (
    <div className={styles.ParentDiv}>
      <Container fluid="md">
        <Row>
          <Col md={true} className={`align-self-center `}>
            <h1 className={`${styles.MainHeading} `}>
              <span className={styles.underline}>
                The rocket &#128640; that your restaurant needs
              </span>
            </h1>
          </Col>
          <Col md={true}>
            <MobilPhoneMockup center={true}>
              <div className={`${styles.TypewritterDiv} align-self-center`}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Create your  ")
                      .typeString(
                        '<span style="box-shadow: inset 0 -20px 0 0 #ff5757;">own </span>'
                      )
                      .typeString("restaurant's ")
                      .typeString(
                        '<span style="box-shadow: inset 0 -20px 0 0 #ff5757;">food ordering </span>'
                      )
                      .typeString("web ")
                      .typeString(
                        '<span style="box-shadow: inset 0 -20px 0 0 #ff5757;">app </span>'
                      )
                      .typeString("in just ")
                      .typeString(
                        '<span style="box-shadow: inset 0 -20px 0 0 #ff5757;">5 minutes.</span>'
                      )
                      .pauseFor(1500)
                      .start();
                  }}
                />
              </div>
            </MobilPhoneMockup>
          </Col>
        </Row>
      </Container>
      <Container fluid="md" className={styles.TakingOrderDiv}>
        <Row>
          <Col md={true} className={`text-center`}>
          <img src="/takinngOrder.svg" className="img-fluid"/>
          </Col>
          <Col md={true} className={`align-self-center text-center`}>
            <h1 className={`${styles.MainHeading} `}>
              <span>
              Are you still taking food orders like in the{" "}
              <span className={styles.underline}>
              19th Century
              </span> ?</span>
            </h1>
          </Col>
        </Row>
      </Container>
      <Container fluid="md" className={styles.TakingOrderDiv}>
        <Row>
        <img src="/mountain.svg" className="img-fluid"/>
        </Row>
        <Row>
        <h1 className={`${styles.MountainHeading} text-center`}>
              <span><span className={styles.underlineGreen}>Change is coming</span>
              {" "}whether you like it or not
              </span>
            </h1>
        </Row>
      </Container>
      <div className={styles.WeAreChangeOuterDIV}> 
      <Container fluid="md" className={styles.WeAreChangeDIV}style={{
            // background: `url('/cafe.jpg')`,
            backgroundSize: "cover",
          }}>
        <Row className={`align-items-center ${styles.WeAreChangeRow}`}>
        <h1 className={`${styles.WeAreChangeHeading} text-center`}>
              <span>We can <span className={styles.WeAreChangeUndedrline}>help</span>
              {" "}you bring that <span className={styles.WeAreChangeUndedrline}>change.</span>
              </span>
            </h1>
        </Row>
      </Container>
      </div>
      <Container fluid="md" className={styles.TakingOrderDiv}>
        <Row>
          <Col md={true} className={`align-self-center text-center`}>
            <h1 className={`${styles.MainHeading} `}>
              <span>
              {`Make your restaurant's menu available through `}
              <span className={styles.underlineGreen}>
              QR Code
              </span></span>
            </h1>
          </Col>
          <Col md={true} className={`text-center`}>
          <img src="/qrCode.svg" className="img-fluid"/>
          </Col>
        </Row>
      </Container>
      <Container fluid="md" className={styles.TakingOrderDiv}>
        <Row>
        <Col md={true}>
        <PizzaOrderScreen />
          </Col>
          <Col md={true} className={`align-self-center text-center`}>
            <h1 className={`${styles.MainHeading} ${styles.PizzaHeadingCol}`}>
              <span>
              {`Take customer's orders online through your very own `}
              <span className={styles.underlineGreen}>
              web app
              </span></span>
            </h1>
          </Col>
        </Row>
      </Container>
      <Container fluid="md" className="">
        <Row>
          <Col md={true} className={styles.globeDiv}>
            <Globe
              width={globeSize}
              height={globeSize}
              backgroundColor="rgba(0,0,0,0)"
              globeImageUrl="/earth-dark.jpeg"
              hexPolygonsData={countries.features}
              hexPolygonResolution={3}
              hexPolygonMargin={0.3}
              hexPolygonColor={(x) => {
                switch (x.properties.SOVEREIGNT) {
                  case "India":
                    return `#7ed957`;
                    break;
                  case "Russia":
                    return `#7ed957`;
                    break;
                  case "France":
                    return `#7ed957`;
                    break;
                  case "Belgium":
                    return `#7ed957`;
                    break;
                  case "Spain":
                    return `#7ed957`;
                    break;
                  case "Germany":
                    return `#7ed957`;
                    break;
                  case "Poland":
                    return `#7ed957`;
                    break;
                  case "Ireland":
                    return `#7ed957`;
                    break;
                  case "Italy":
                    return `#7ed957`;
                    break;
                  case "Greece":
                    return `#7ed957`;
                    break;
                  case "Croatia":
                    return `#7ed957`;
                    break;
                  case "South Africa":
                    return `#7ed957`;
                    break;
                  case "Austria":
                    return `#7ed957`;
                    break;
                  case "Switzerland":
                    return `#7ed957`;
                    break;
                  case "Netherlands":
                    return `#7ed957`;
                    break;
                  case "Norway":
                    return `#7ed957`;
                    break;
                  case "Sweden":
                    return `#7ed957`;
                    break;
                  case "Finland":
                    return `#7ed957`;
                    break;
                  case "Denmark":
                    return `#7ed957`;
                    break;
                  case "Portugal":
                    return `#7ed957`;
                    break;
                  case "United Kingdom":
                    return `#7ed957`;
                    break;
                  case "Iceland":
                    return `#7ed957`;
                    break;
                  case "United States of America":
                    return `#7ed957`;
                    break;
                  case "Cuba":
                    return `#7ed957`;
                    break;
                  case "Australia":
                    return `#7ed957`;
                    break;
                  case "Canada":
                    return `#7ed957`;
                    break;
                  case "Estonia":
                    return `#7ed957`;
                    break;
                  case "United Arab Emirates":
                    return `#7ed957`;
                    break;
                  case "Saudi Arabia":
                    return `#7ed957`;
                    break;
                  case "Israel":
                    return `#7ed957`;
                    break;
                  case "Singapore":
                    return `#7ed957`;
                    break;
                  case "Thailand":
                    return `#7ed957`;
                    break;
                  case "South Korea":
                    return `#7ed957`;
                    break;
                  case "Japan":
                    return `#7ed957`;
                    break;
                  case "Indonesia":
                    return `#7ed957`;
                    break;
                  case "Brazil":
                    return `#7ed957`;
                    break;
                  case "Mexico":
                    return `#7ed957`;
                    break;
                  case "Chile":
                    return `#7ed957`;
                    break;
                  case "Argentina":
                    return `#7ed957`;
                    break;
                  case "Peru":
                    return `#7ed957`;
                    break;
                  case "Taiwan":
                    return `#7ed957`;
                    break;
                  case "New Zealand":
                    return `#7ed957`;
                    break;
                  case "Vietnam":
                    return `#7ed957`;
                    break;
                  case "Nepal":
                    return `#7ed957`;
                    break;
                  case "Bhutan":
                    return `#7ed957`;
                    break;
                  default:
                    return `#FF0000`;
                }
              }}
            />
          </Col>
          <Col md={true} className="align-self-center">
          <h1 className={`${styles.MountainHeading} text-center`}>
              <span><span className={styles.underlineGreen}>Where our service is Operational and Live.</span>
              {" "}<span className={styles.underline}>
                Where we are offline.
              </span>
              </span>
            </h1>
          </Col>
        </Row>
      </Container>
      <div className={`${styles.seeHowDiv} text-center`}>
        <button className={styles.seeHowButton}>see how ?</button>
      </div>
      <div className={`${styles.FreeFooterDiv} text-center`}>
        <h1 className={styles.FreeFooter}><span style={{color:"grey"}}>Its</span> Free Forever <span style={{color:"grey"}}>for small businesses</span></h1>
      </div>
    </div>
  );
}
