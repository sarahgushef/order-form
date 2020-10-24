import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Col, Form } from 'react-bootstrap';

const Asterisk = styled.span`
  color: red;
`;

const Calendar = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

function PaymentTypeSection(props) {
  const { expiredDate, setOrder, order, paymentTypes, handleChange } = props;

  return (
    <>
      <Form.Row id="payment-type-section">
        <Form.Group as={Col} md={6}>
          <Form.Label>
            Payment Type<Asterisk>*</Asterisk>
          </Form.Label>
          <Form.Control
            as="select"
            name="paymentType"
            defaultValue="Choose..."
            onChange={handleChange}
          >
            <option disabled>Choose...</option>
            {paymentTypes.map((type) => (
              <option key={type.id} value={type.name}>
                {type.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md={6}>
          <Form.Label>
            Expired Date<Asterisk>*</Asterisk>
          </Form.Label>
          <Calendar>
            <StyledDatePicker
              selected={expiredDate}
              onChange={(date) => setOrder({ ...order, expiredDate: date })}
            />
          </Calendar>
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Label>Notes</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          style={{ resize: 'none' }}
          name="notes"
          value={order.notes}
          onChange={handleChange}
        />
      </Form.Group>
    </>
  );
}

export default PaymentTypeSection;
