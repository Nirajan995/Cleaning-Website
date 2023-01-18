import { Col } from "react-bootstrap";

import Image from "next/image";

export const ProjectCard = ({ title, description, imgUrl }) => {

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <Image src={imgUrl} alt="Service" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col >
  )
}
