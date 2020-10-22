import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { TiDelete } from 'react-icons/ti';

const StyledContainer = styled(Container)`
  background: #fafafa;
  padding: 1rem;
`;

const StyledForm = styled(Form)`
  background: white;
  padding: 1rem;
  box-shadow: 2px 3px 7px -2px rgba(158, 158, 158, 1);
`;

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

const DeleteButton = styled(TiDelete)`
  color: red;
`;

const RightButton = styled(Button)`
  float: right;
  margin-left: 10px;
`;

const NewItemButton = styled(Button)`
  color: white;
  box-shadow: 2px 3px 7px -2px rgba(158, 158, 158, 1);
`;

function OrderPage() {
  const [date, setDate] = useState(new Date());

  return (
    <StyledContainer>
      <h3>Create Order</h3>

      <StyledForm>
        <Form.Row>
          <Col md={4}>
            <p>Detail</p>
          </Col>
          <Col md={8}>
            <Form.Group>
              <Form.Label>
                Name
                <Asterisk>*</Asterisk>
              </Form.Label>
              <Form.Control as="select">
                <option>Tiger Nixon</option>
                <option>Garret Winters</option>
                <option>Ashton Cox</option>
                <option>Cedric Kelly</option>
                <option>Brielle Williamson</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Distribution Center<Asterisk>*</Asterisk>
              </Form.Label>
              <Form.Control as="select">
                <option>DC Tangerang</option>
                <option>DC Cikarang</option>
              </Form.Control>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} md={6}>
                <Form.Label>
                  Payment Type<Asterisk>*</Asterisk>
                </Form.Label>
                <Form.Control as="select">
                  <option>Payment Type</option>
                  <option>Cash H+1</option>
                  <option>Cash H+3</option>
                  <option>Cash H+7</option>
                  <option>Transfer H+1</option>
                  <option>Transfer H+3</option>
                  <option>Transfer H+7</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} md={6}>
                <Form.Label>
                  Expired Date<Asterisk>*</Asterisk>
                </Form.Label>
                <Calendar>
                  <StyledDatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                  />
                </Calendar>
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows={3} style={{ resize: 'none' }} />
            </Form.Group>
          </Col>
        </Form.Row>
        <hr />
        <Form.Row>
          <Col md={4}>
            <p>Product</p>
          </Col>
          <Col md={8}>
            <DeleteButton />
            <Form.Row>
              <Form.Group as={Col} md={8}>
                <Form.Label>
                  Product<Asterisk>*</Asterisk>
                </Form.Label>
                <Form.Control as="select">
                  <option>Product Name</option>
                  <option>Morning Dew Milk</option>
                  <option>Le Minerale 600ml</option>
                  <option>Greenfields Full Cream Milk 1L</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} md={4}>
                <Form.Label>
                  Unit<Asterisk>*</Asterisk>
                </Form.Label>
                <Form.Control as="select">
                  <option>Unit</option>
                  <option>Karton</option>
                  <option>Pak</option>
                  <option>Pcs</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md={2}>
                <Form.Label>
                  Quantity<Asterisk>*</Asterisk>
                </Form.Label>
                <Form.Control placeholder="Quantity"></Form.Control>
              </Form.Group>
              <Form.Group as={Col} md={2}>
                <Form.Label>
                  Price<Asterisk>*</Asterisk>
                </Form.Label>
                <Form.Control
                  value={0}
                  disabled
                  style={{ background: 'white' }}
                />
              </Form.Group>
              <Form.Group as={Col} md={8}>
                <Form.Label>
                  Total Price<Asterisk>*</Asterisk>
                </Form.Label>
                <Form.Control value={0} disabled></Form.Control>
              </Form.Group>
            </Form.Row>
            <Row>
              <Col md={4}></Col>
              <Col md={8}>
                <hr />
                <Row>
                  <Col>
                    <span>
                      <b>Total Nett Price</b>
                    </span>
                  </Col>
                  <Col>
                    <span>
                      <b>0</b>
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <DeleteButton />
            <Form.Row>
              <Form.Group as={Col} md={8}>
                <Form.Label>
                  Product<Asterisk>*</Asterisk>
                </Form.Label>
                <Form.Control as="select">
                  <option>Product Name</option>
                  <option>Morning Dew Milk</option>
                  <option>Le Minerale 600ml</option>
                  <option>Greenfields Full Cream Milk 1L</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} md={4}>
                <Form.Label>
                  Unit<Asterisk>*</Asterisk>
                </Form.Label>
                <Form.Control as="select">
                  <option>Unit</option>
                  <option>Karton</option>
                  <option>Pak</option>
                  <option>Pcs</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md={2}>
                <Form.Label>
                  Quantity<Asterisk>*</Asterisk>
                </Form.Label>
                <Form.Control placeholder="Quantity"></Form.Control>
              </Form.Group>
              <Form.Group as={Col} md={2}>
                <Form.Label>
                  Price<Asterisk>*</Asterisk>
                </Form.Label>
                <Form.Control
                  value={0}
                  disabled
                  style={{ background: 'white' }}
                />
              </Form.Group>
              <Form.Group as={Col} md={8}>
                <Form.Label>
                  Total Price<Asterisk>*</Asterisk>
                </Form.Label>
                <Form.Control value={0} disabled></Form.Control>
              </Form.Group>
            </Form.Row>
            <Row>
              <Col md={4}></Col>
              <Col md={8}>
                <hr />
                <Row>
                  <Col>
                    <span>
                      <b>Total Nett Price</b>
                    </span>
                  </Col>
                  <Col>
                    <span>
                      <b>0</b>
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <NewItemButton variant="warning">NEW ITEM +</NewItemButton>
              </Col>
            </Row>
            <Row>
              <Col md={4}></Col>
              <Col md={8}>
                <Row>
                  <Col>
                    <span>
                      <b>Total Price</b>
                    </span>
                  </Col>
                  <Col>
                    <span>
                      <b>0</b>
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Form.Row>
        <hr />
        <Form.Row>
          <Col></Col>
          <Col>
            <RightButton variant="success">CONFIRM</RightButton>
            <RightButton variant="light">CANCEL</RightButton>
          </Col>
        </Form.Row>
      </StyledForm>
    </StyledContainer>
  );
}

export default OrderPage;
