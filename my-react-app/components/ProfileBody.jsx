
// This is an example of props drilling 
// data is sent down through each layer of component
// Cons: Component that is deep within the layer will make
//       data travel down all those component
 
function ProfileBody ({email, location, skills}) {
    return (
        <tbody>
          <tr>
            <th scope="row">Email</th>
            <td>
              <a href={`mailto:${email}`}>
                {email}
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">Location</th>
            <td>{location.join(", ")}</td>
          </tr>
          <tr>
            <th scope="row">Skills</th>
            <td>{skills.join(", ")}</td>
          </tr>
        </tbody>
    )
}

export default ProfileBody;