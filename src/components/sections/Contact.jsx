import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Element } from "react-scroll";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-contnet: center; */
  margin-top: -80px;
  padding-top: 80px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }
`;

const Sentence = styled.p`
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
`;

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!contactDetails.name.trim()) {
      formErrors.name = "Name is required.";
    }
    if (!contactDetails.email.trim()) {
      formErrors.email = "Email is required.";
    }
    if (!contactDetails.subject.trim()) {
      formErrors.subject = "Subject is required.";
    }
    if (!contactDetails.message.trim()) {
      formErrors.message = "Message is required.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactDetails((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const handelSubmit = async (e) => {
    try {
      e.preventDefault();

      const serviceId = "service_c1xst0m";
      const templateId = "template_lgcr7zh";
      const publicKey = "sMMwuCiYXSc-ixWs9";

      const templateParams = {
        from_email: contactDetails.email,
        from_name: contactDetails.name,
        to_name: "D.P. Liyanagama",
        subject: contactDetails.subject,
        message: contactDetails.message,
      };

      if (validateForm()) {
        const response = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );

        if (response.status === 200) {
          toast.success("Email was successfully sent");
          setContactDetails({
            email: "",
            name: "",
            subject: "",
            message: "",
          });
        } else {
          toast.error("Email was not sent");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Element name="Contact">
      <Container id="Contact">
        <Wrapper>
          <Title>Contact</Title>
          <Desc
            style={{
              marginBottom: "40px",
            }}
          >
            Feel free to reach out to me for any questions or opportunities!
          </Desc>

          <ContactForm>
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput
              type="text"
              placeholder="Your Name"
              name="name"
              value={contactDetails.name}
              onChange={handleChange}
              required={true}
            />
            {errors.name && (
              <Sentence className="error">{errors.name}</Sentence>
            )}
            <ContactInput
              type="email"
              placeholder="Your Email"
              name="email"
              value={contactDetails.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <Sentence className="error">{errors.email}</Sentence>
            )}
            <ContactInput
              type="text"
              placeholder="Subject"
              name="subject"
              value={contactDetails.subject}
              onChange={handleChange}
              required
            />
            {errors.subject && (
              <Sentence className="error">{errors.subject}</Sentence>
            )}
            <ContactInputMessage
              type="text"
              placeholder="Message"
              name="message"
              value={contactDetails.message}
              rows={4}
              onChange={handleChange}
              required
            />
            {errors.message && (
              <Sentence className="error">{errors.message}</Sentence>
            )}
            <ContactButton onClick={handelSubmit} type="submit" value="Send" />
          </ContactForm>
        </Wrapper>
      </Container>
    </Element>
  );
};

export default Contact;
