import Button from "@/components/shared/button/Button";
import { P } from "@/components/shared/headings/Headings";
import Meta from "@/components/shared/meta/Meta";
import Modal from "@/components/shared/modal/Modal";
import Main from "@/layout/main/Main";
import React, { useState } from "react";

export default function Home() {
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);

  return (
    <>
      <Meta
        title="Test page"
        description="Drop your sample component here, not index.tsx"
      />

      <Main>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex gap-4">
            <Button size="lg" onClick={() => setFirstModal(true)}>
              First modal
            </Button>
            <Button size="lg" onClick={() => setSecondModal(true)}>
              Second modal
            </Button>
          </div>
        </div>
      </Main>

      <Modal
        openModal={firstModal}
        setOpenModal={setFirstModal}
        variant="filled"
      >
        <section>
          <P className="my-4">Checkout</P>
          <div className="min-h-[400px]"></div>
        </section>
      </Modal>

      <Modal
        openModal={secondModal}
        setOpenModal={setSecondModal}
        variant="plain"
      >
        <section className="bg-primary400">
          <div className="min-h-[400px] w-full"></div>
        </section>
      </Modal>
    </>
  );
}
