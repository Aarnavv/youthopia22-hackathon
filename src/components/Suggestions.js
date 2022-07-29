import React from "react";
import "./css/complaints-suggestions.css";

function Suggestions() {
  return (
    <div className="suggestions">
      <section className="header">
        <div className="container">
          <h1 className="suggestions-title">  Suggestion Form  </h1>
          <form className="suggestions-form" action="https://formspree.io/f/xgeqwekp" method="POST">
            <table>
              <tr>
                <td>
                  Name:
                </td>
                <td>
                  <input type="text" placeholder="Full Name" name="" />
                </td>
              </tr>
              <tr>
                <td>
                  Aadhar:
                </td>
                <td>
                  <input type="number" placeholder="Aadhar no." name="" />
                </td>
              </tr>
              <tr>
                <td>
                  E-mail:
                </td>
                <td>
                  <input type="mail" placeholder="Email" name="" />
                </td>
              </tr>
              <tr>
                <td>
                  Contact no.
                </td>
                <td>
                  <select>
                    <option>+91</option>
                    <option>+1</option>
                    <option>+973</option>
                    <option>+91</option>
                    <option>+86</option>
                    <option>+93</option>
                  </select>
                  <input type="number" placeholder="82735****" name="" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="radio" name="Charges" /> Anonymous
                </td>
              </tr>
              <tr>
                <td>
                  <textarea name="Message" placeholder="Write Here..." required></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="button-suggestions" type="SUBMIT">Send</button>
                </td>
              </tr>
            </table>
          </form>
        </div>

      </section>

    </div >
  );
}

export default Suggestions;
