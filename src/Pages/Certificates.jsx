import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import FSWD from "../assets/FSWD.jpg"
import Digital from "../assets/DigitalMarketing.jpg"

const certifications = [
  {
    id: 1,
    title: "Full Stack Web Development-2023",
    issuer: "Codingshuttle",
    date: "Jan 2023",
    certificateUrl: FSWD,
  },
  {
    id: 2,
    title: "Fundamentals of Digital Marketing",
    issuer: "Google",
    date: "July 2020",
    certificateUrl: Digital,
  },
];

const Certificates = () => {
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="pt-20 bg-white dark:bg-gray-700">
      <div className="w-3/4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Certificates
        </h2>
        <p className="text-center m-auto text-gray-500 dark:text-gray-400 sm:w-3/4 lg:w-3/5 mb-10">
          🏅 These certifications reflect my continuous learning and commitment
          to mastering modern web development technologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-orange-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-gray-500 group-hover:transform group-hover:duration-300 group-hover:scale-[1.02] hover:ease-in-out"
            >
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                <strong>Issued by:</strong> {cert.issuer}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-3">
                <strong>Date:</strong> {cert.date}
              </p>
              <button
                className="bg-orange-400 cursor-pointer px-6 py-2 shadow-lg rounded-md text-white font-semibold hover:bg-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/30 hover:scale-105 active:scale-95"
                onClick={() => handleOpen(cert)}
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>

        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle className="text-orange-400">{selectedCert?.title}</DialogTitle>
          <DialogContent className="overflow-auto scrollbar-none">
            {selectedCert && (
              <img
                src={selectedCert.certificateUrl}
                alt={selectedCert.title}
                className="w-full rounded-lg"
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="error">
              Close
            </Button>
            <Button
              href={selectedCert?.certificateUrl}
              download
              component="a"
              variant="contained"
              color="warning"           
            >
              Download
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </section>
  );
};

export default Certificates;

