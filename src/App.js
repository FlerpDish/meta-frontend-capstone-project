import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFormContext } from "./FormContext";
import './App.css';

function App() {
  const { form } = useFormContext();

  const formProps = {
    name: form.name,
    date: form.date,
    time: form.time,
    guests: form.numberOfGuests,
    occasion: form.occasion,
    table: form.tablePreference,
    request: form.message,
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route
          path="/booking-confirmation"
          element={<BookingConfirmation {...formProps} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
