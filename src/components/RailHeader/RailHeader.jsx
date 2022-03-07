import { fb } from 'service';
import { useChat } from 'context';
import { useResolved } from 'hooks';
import { useRef, useState } from 'react';
import { FileUpload } from 'components';
import { Icon, IconGroup, Image, Loader } from 'semantic-ui-react';

export const RailHeader = () => {
  const { chatConfig } = useChat();
  const configResolved = useResolved(chatConfig);
  const inputRef = useRef(null);
  const [image, setImage] = useState();

  return (
    <>
      <input
        className="file-input"
        type="file"
        ref={inputRef}
        accept="image/jpeg, image/png"
        onChange={e => {
          const file = e.target?.files?.[0];
          if (file) {
            setImage(file);
          }
        }}
      />
    </>
  );
};
