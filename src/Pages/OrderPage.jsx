import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { TiDelete } from 'react-icons/ti';

import PaymentTypeSection from '../Components/PaymentTypeSection';

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
  const [employeeList, setEmployeeList] = useState([]);
  const [distributionCenters] = useState([
    {
      id: 1,
      name: 'DC Tangerang',
    },
    {
      id: 2,
      name: 'DC Cikarang',
    },
  ]);
  const [paymentTypes] = useState([
    {
      id: 1,
      name: 'Cash H+1',
    },
    {
      id: 2,
      name: 'Cash H+3',
    },
    {
      id: 3,
      name: 'Cash H+7',
    },
    {
      id: 4,
      name: 'Transfer H+1',
    },
    {
      id: 5,
      name: 'Cash H+3',
    },
    {
      id: 6,
      name: 'Cash H+7',
    },
  ]);

  const [order, setOrder] = useState({
    name: '',
    distributionCenter: '',
    paymentType: '',
    expiredDate: new Date(),
    notes: '',
    orderItems: [],
  });

  const getAllEmployee = async () => {
    try {
      const response = await fetch(
        `http://dummy.restapiexample.com/api/v1/employees`
      );
      const result = await response.json();

      setEmployeeList(result.data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getAllEmployee();
  }, []);

  const handleChange = (event) => {
    setOrder({
      ...order,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <StyledContainer>
      <h3>Create Order</h3>

      <StyledForm>
        <Form.Row id="detail-section">
          <Col md={4}>
            <p>Detail</p>
          </Col>
          <Col md={8}>
            <Form.Group>
              <Form.Label>
                Name
                <Asterisk>*</Asterisk>
              </Form.Label>
              <Form.Control
                as="select"
                name="name"
                onChange={handleChange}
                defaultValue="Name"
              >
                <option disabled>Name</option>
                {employeeList.map((employee) => (
                  <option key={employee.id} value={employee.employee_name}>
                    {employee.employee_name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Distribution Center<Asterisk>*</Asterisk>
              </Form.Label>
              <Form.Control
                as="select"
                name="distributionCenter"
                onChange={handleChange}
                defaultValue="No data available"
              >
                {order.name === '' ? (
                  <option disabled>No data available</option>
                ) : (
                  <>
                    <option disabled>Choose...</option>
                    {distributionCenters.map((x) => (
                      <option key={x.id} value={x.name}>
                        {x.name}
                      </option>
                    ))}
                  </>
                )}
              </Form.Control>
            </Form.Group>
            {order.name !== '' && order.distributionCenter !== '' && (
              <PaymentTypeSection
                order={order}
                expiredDate={order.expiredDate}
                setOrder={setOrder}
                handleChange={handleChange}
                paymentTypes={paymentTypes}
              />
            )}
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
