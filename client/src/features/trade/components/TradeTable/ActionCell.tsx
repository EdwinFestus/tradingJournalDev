import { useState } from "react";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

interface ActionCellProps {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function ActionCell({
  onView,
  onEdit,
  onDelete,
}: ActionCellProps) {
  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton
        size="small"
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <MoreVertIcon fontSize="small" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            onView?.();
          }}
        >
          <ListItemIcon>
            <VisibilityOutlinedIcon fontSize="small" />
          </ListItemIcon>

          <ListItemText>View</ListItemText>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
            onEdit?.();
          }}
        >
          <ListItemIcon>
            <EditOutlinedIcon fontSize="small" />
          </ListItemIcon>

          <ListItemText>Edit</ListItemText>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
            onDelete?.();
          }}
        >
          <ListItemIcon>
            <DeleteOutlineIcon
              color="error"
              fontSize="small"
            />
          </ListItemIcon>

          <ListItemText
            primaryTypographyProps={{
              color: "error",
            }}
          >
            Delete
          </ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}