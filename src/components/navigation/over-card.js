export const OverCard = ({ children, isOpen = false, onClose = null }) => {
  const handleChildElementClick = (e) => {
    e.stopPropagation();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="over-pane" onClick={onClose}>
      <div className="central-card" onClick={(e) => handleChildElementClick(e)}>
        {children}
      </div>
    </div>
  );
};
