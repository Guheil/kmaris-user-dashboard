"use client";

import { FC, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { SidebarProps, NavItemProps, NavSection } from "./interface";
import {
  SidebarRoot,
  SidebarHeader,
  SidebarHeaderContent,
  Logo,
  NavigationList,
  NavItem,
  NavIcon,
  NavText,
  SidebarFooter,
  UserProfile,
  UserAvatar,
  UserInfo,
  UserName,
  UserRole,
  NavSection as NavSectionComponent,
  NavSectionTitle,
  CollapseButton,
  MobileBurgerButton,
  MobileOverlay,
} from "./elements";

const NavLink: FC<NavItemProps & { isOpen: boolean; onMobileClick?: () => void }> = ({
  icon,
  text,
  href,
  active,
  onClick,
  isOpen,
  onMobileClick,
}) => (
  <Link href={href || "#"}>
    <NavItem
      icon={icon}
      text={text}
      href={href}
      active={active}
      onClick={(e) => {
        onClick?.(e);
        onMobileClick?.();
      }}
    >
      <NavIcon active={active}>{icon}</NavIcon>
      <NavText isOpen={isOpen}>{text}</NavText>
    </NavItem>
  </Link>
);

const NavigationSection: FC<{
  section: NavSection;
  isOpen: boolean;
  onMobileClick?: () => void;
}> = ({ section, isOpen, onMobileClick }) => (
  <NavSectionComponent>
    {section.title && <NavSectionTitle isOpen={isOpen}>{section.title}</NavSectionTitle>}
    {section.items.map((item, index) => (
      <NavLink key={index} {...item} isOpen={isOpen} onMobileClick={onMobileClick} />
    ))}
  </NavSectionComponent>
);

export const Sidebar: FC<SidebarProps> = ({
  isOpen = true,
  onToggle,
  navItems,
  navSections,
  userName,
  userRole,
  userInitials,
  logoSrc = "/Logo.png",
  appName = "",
  collapsible = true,
}) => {
  const sectionsToRender = navSections || (navItems ? [{ items: navItems }] : []);

  // Close sidebar on mobile when clicking outside
  const handleOverlayClick = () => {
    if (onToggle) {
      onToggle();
    }
  };

  // Close sidebar on mobile when clicking nav item
  const handleMobileNavClick = () => {
    if (window.innerWidth < 900 && onToggle) {
      onToggle();
    }
  };

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && window.innerWidth < 900 && isOpen && onToggle) {
        onToggle();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onToggle]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 900 && isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [isOpen]);

  return (
    <>
      <MobileBurgerButton onClick={onToggle} aria-label="Toggle menu">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </MobileBurgerButton>

      <MobileOverlay isOpen={isOpen} onClick={handleOverlayClick} />

      <SidebarRoot isOpen={isOpen}>
        <SidebarHeader>
          <SidebarHeaderContent>
            <Logo isOpen={isOpen}>
              <Image
                src={"/logoOriginal.png"}
                alt="Logo"
                width={160}
                height={60}
                style={{ objectFit: "contain" }}
              />
              {isOpen && appName && <span>{appName}</span>}
            </Logo>
            {collapsible && (
              <CollapseButton onClick={onToggle} aria-label="Toggle sidebar">
                {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </CollapseButton>
            )}
          </SidebarHeaderContent>
        </SidebarHeader>

        <NavigationList>
          {sectionsToRender.map((section, index) => (
            <NavigationSection
              key={index}
              section={section}
              isOpen={isOpen}
              onMobileClick={handleMobileNavClick}
            />
          ))}
        </NavigationList>

        <SidebarFooter>
          <UserProfile isOpen={isOpen}>
            <UserAvatar>{userInitials}</UserAvatar>
            <UserInfo isOpen={isOpen}>
              <UserName>{userName}</UserName>
              <UserRole>{userRole}</UserRole>
            </UserInfo>
          </UserProfile>
        </SidebarFooter>
      </SidebarRoot>
    </>
  );
};