import * as React from "react";
import { CurrentUser } from "@fider/models";
import { classSet, page } from "@fider/services";
import { FiderVersion } from "@fider/components";

interface SiteMenuProps {
  activeItem: string;
  user: CurrentUser;
}

interface SideMenuItemProps {
  name: string;
  title: string;
  isActive: boolean;
  href: string;
}

const SideMenuItem = (props: SideMenuItemProps) => {
  const className = classSet({
    item: true,
    active: props.isActive
  });

  if (props.isActive) {
    return (
      <span key={props.name} className={className}>
        {props.title}
      </span>
    );
  }

  return (
    <a key={props.name} className={className} href={props.href}>
      {props.title}
    </a>
  );
};

export const SideMenu = (props: SiteMenuProps) => {
  const activeItem = props.activeItem || "general";
  return (
    <>
      <div className="ui vertical menu fluid">
        <SideMenuItem name="general" title="General" href="/admin" isActive={activeItem === "general"} />
        <SideMenuItem name="privacy" title="Privacy" href="/admin/privacy" isActive={activeItem === "privacy"} />
        <SideMenuItem name="members" title="Members" href="/admin/members" isActive={activeItem === "members"} />
        <SideMenuItem name="tags" title="Tags" href="/admin/tags" isActive={activeItem === "tags"} />
        <SideMenuItem
          name="invitations"
          title="Invitations"
          href="/admin/invitations"
          isActive={activeItem === "invitations"}
        />
        {props.user.isAdministrator && (
          <SideMenuItem name="export" title="Export" href="/admin/export" isActive={activeItem === "export"} />
        )}
      </div>
      <FiderVersion />
    </>
  );
};
