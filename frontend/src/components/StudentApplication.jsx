import React, { useState } from 'react';

function StudentApplication() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    gurName: '',
    gurContact: '',
    gurAddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Student Registration Form</h2>

            <h4 className="mb-4">Student Information</h4>

            <form>
              <div className="form-group mb-3 row">
                <label htmlFor="name" className="col-sm-4 col-form-label">Name:</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group mb-3 row">
                <label htmlFor="age" className="col-sm-4 col-form-label">Age:</label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    name="age"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group mb-3 row">
                <label htmlFor="contact" className="col-sm-4 col-form-label">Contact:</label>
                <div className="col-sm-8">
                  <input
                    type="tel"
                    className="form-control"
                    id="contact"
                    name="contact"
                    placeholder="Enter your contact number"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <h4 className="mb-4">Guardian Information</h4>

              <div className="form-group mb-3 row">
                <label htmlFor="gurName" className="col-sm-4 col-form-label">Guardian Name:</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="gurName"
                    name="gurName"
                    placeholder="Enter guardian's name"
                    value={formData.gurName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group mb-3 row">
                <label htmlFor="gurAddress" className="col-sm-4 col-form-label">Guardian Address:</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="gurAddress"
                    name="gurAddress"
                    placeholder="Enter guardian's address"
                    value={formData.gurAddress}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group mb-3 row">
                <label htmlFor="gurContact" className="col-sm-4 col-form-label">Guardian Contact:</label>
                <div className="col-sm-8">
                  <input
                    type="tel"
                    className="form-control"
                    id="gurContact"
                    name="gurContact"
                    placeholder="Enter guardian's contact number"
                    value={formData.gurContact}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between mt-4">
                <button type="reset" className="btn btn-secondary">Clear</button>
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentApplication;
