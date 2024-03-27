"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Button,
} from "@nextui-org/react";
import { Switch } from "@nextui-org/react";


const moonIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

const sunIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

interface NavbarDropdownProps {
  isCursorTrailActive: boolean;
  setCursorTrailActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavbarDropdown({ isCursorTrailActive, setCursorTrailActive}: NavbarDropdownProps) {
    const handleCursorTrailToggle = (newValue: boolean) => {
      setCursorTrailActive(newValue);
    };

  return (
    <Dropdown className="shadow-around mt-6 bg-[#18181b] border border-[#d4d4d8]" closeOnSelect={false}>
      <DropdownTrigger>
        <Button variant="shadow" className="text-xl text-black">
          {"/mod"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Display mods"
        disabledKeys={["fr", "ch", "tbd"]}
      >
        <DropdownSection
          showDivider
          aria-label="toggle options"
          title="Toggle Options"
        >
          <DropdownItem key="theme-switch" className="bg-white" textValue="/dark-mode">
            <Switch
              defaultSelected
              size="sm"
              color="secondary"
              thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                  <span className={className}>{moonIcon}</span>
                ) : (
                  <span className={className}>{sunIcon}</span>
                )
              }
            >
              <span>{"/dark-mode"}</span>
            </Switch>
          </DropdownItem>
          <DropdownItem key="cursor-trail" className="bg-white mt-2" textValue="/cursor-trail">
            <Switch
              isSelected={isCursorTrailActive}
              size="sm"
              color="secondary"
              onValueChange={handleCursorTrailToggle}
            >
              <span>{"/cursor-trail"}</span>
            </Switch>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="translate" title="Translate" showDivider>
          <DropdownItem key="eng" className="text-[#d4d4d8]" shortcut="⌘E">
            {"/translate-eng"}
          </DropdownItem>
          <DropdownItem key="fr" className="text-[#d4d4d8]" shortcut="⌘F">
            {"/translate-fr"}
          </DropdownItem>
          <DropdownItem
            key="ch"
            className="text-[#d4d4d8]"
            shortcut="⌘C"
            showDivider
          >
            {"/translate-ch"}
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="tbd" showDivider title="Coming Soon ...">
          <DropdownItem key="tbd" className="text-[#d4d4d8]" shortcut="⇧`">
            {"/tbd"}
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
