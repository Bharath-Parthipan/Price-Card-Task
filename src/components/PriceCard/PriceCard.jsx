import PropTypes from "prop-types"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export const PriceCard = (props) => {
    const { priceCardData } = props;
  return (
    <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
      {priceCardData.map((data, index) => (
        <div key={index}>
          <Card className="card-style">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-body-tertiary text-center">
                {data.planType}
              </Card.Subtitle>
              <Card.Title className="text-center fs-1 my-4">
                ${data.price}/month
              </Card.Title>
              <Card.Text className="border-top pt-3">
                {data.basicFeatures.map((basicFeatures, index) => (
                  <div key={index} className="my-3">
                    <FontAwesomeIcon icon={faCheck} className="px-2" />
                    <span>{basicFeatures}</span>
                  </div>
                ))}
                {data.plusFeatures.map((basicFeatures, index) => (
                  <div
                    key={index}
                    className="my-3"
                    style={
                      data.price === 9 || data.price === 49
                        ? {}
                        : { color: "gray" }
                    }
                  >
                    <FontAwesomeIcon
                      icon={
                        data.price === 9 || data.price === 49
                          ? faCheck
                          : faXmark
                      }
                      className="px-2"
                    />
                    <span>{basicFeatures}</span>
                  </div>
                ))}
                {data.proFeatures.map((basicFeatures, index) => (
                  <div
                    key={index}
                    className="my-3"
                    style={data.price == 49 ? {} : { color: "gray" }}
                  >
                    <FontAwesomeIcon
                      icon={data.price == 49 ? faCheck : faXmark}
                      className="px-2"
                    />
                    <span>{basicFeatures}</span>
                  </div>
                ))}
              </Card.Text>
              <Button
                style={{ width: "100%", borderRadius: "30px", padding: "12px" }}
              >
                Button
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

PriceCard.propTypes = {
    priceCardData:PropTypes.arrayOf()
};