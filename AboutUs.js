import React from "react";

const AboutUs = () => {
  const feeStructure = [
    {
      level: "Undergraduate",
      tuitionFee: "20,000",
      accommodationFee: "5,000",
      otherFees: "2,000",
    },
    {
      level:    "Graduate",
      tuitionFee: "30,000",
      accommodationFee:   "10,000",
      otherFees:    "5,500",
    },
  ];

  return (

    <div>
      <h2>About Us</h2>
      <br></br>
      <br></br>
    
    
      <h3>Fee Structure</h3>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Tuition Fee</th>
            <th>Accommodation Fee</th>
            <th>Other Fees</th>
          </tr>
        </thead>
        <tbody>
          {feeStructure.map((fee) => (
            <tr key={fee.level}>
              <td>{fee.level}</td>
              <td>{fee.tuitionFee}</td>
              <td>{fee.accommodationFee}</td>
              <td>{fee.otherFees}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
      <h3>About Our College</h3>
      <p>
        <br></br>
      The college has committed itself to provide quality education to all strata and becoming centre of excellence in the process of facilitating effective teaching and learning with several career oriented traditional and specialty programs.
The aim of the college is to promote education by establishing schools and colleges and starting traditional as well as specialty programs with courses in professional studies, business management, legal, technical, medical, agricultural, physical education and other various fields.
The college is located in Khanda Colony at New Panvel, Navi Mumbai, Maharashtra. The college has a sprawling campus of 5 acres with all facilities necessary to carry out  sound academic, co-curricular, extra-curricular and extension activities of an educational institution.
Department

Department of English

Department of GeographyNSS - The NSS unit of college various activities like blood donation camp, celebration of NSS day, elocution, essay writing and poster competitions. Some its achievements are -

Best ‘N.S.S. Unit Award’ by University of Mumbai in the academic year  2007-2008.

The ‘Best N.S.S. Programme Officer Award’ by University of Mumbai in the academic year 2007-2008

Facilities

     </p>
      
    </div>
  );
};

export default AboutUs;
