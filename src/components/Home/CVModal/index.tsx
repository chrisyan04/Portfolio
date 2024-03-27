import React from 'react'
import resume from "@/public/resume.webp";
import resumeIconDark from "@/public/Icons/resume-icon-dark.svg";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { motion } from "framer-motion";

export default function CVModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/11X_eQ__8T3YeH68jBGYXlDlnIUHrqS3z/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className='max-sm:py-2'
    >
      <Button
        onPress={onOpen}
        className="max-w-fit text-lg shadow-around bg-gradient-to-tr from-purple-800 to-red-500 text-white"
      >
        <Image
          src={resumeIconDark}
          alt="resume icon dark"
          height={25}
          width={25}
        />
        {"Resume"}
      </Button>
      <Modal
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
        backdrop="blur"
        radius="md"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <Image
                  src={resume}
                  alt="Resume"
                  height={500}
                  width={500}
                  style={{ height: "500px", width: "auto" }}
                  className="pt-4"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="default" onPress={handleDownload}>
                  Download
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </motion.div>
  );
}
