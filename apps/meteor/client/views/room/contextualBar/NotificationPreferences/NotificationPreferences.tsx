import type { SelectOption } from '@rocket.chat/fuselage';
import { Button, ButtonGroup } from '@rocket.chat/fuselage';
import { useTranslation } from '@rocket.chat/ui-contexts';
import type { ReactElement } from 'react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import VerticalBar from '../../../../components/VerticalBar';
import NotificationPreferencesForm from './NotificationPreferencesForm';

type NotificationPreferencesProps = {
	handleClose: () => void;
	handleSave: () => void;
	notificationOptions: {
		[key: string]: SelectOption[];
	};
	handlePlaySound: () => void;
};

const NotificationPreferences = ({
	handleClose,
	handleSave,
	notificationOptions,
	handlePlaySound,
}: NotificationPreferencesProps): ReactElement => {
	const t = useTranslation();
	const {
		formState: { isDirty },
	} = useFormContext();

	return (
		<>
			<VerticalBar.Header>
				<VerticalBar.Icon name='bell' />
				<VerticalBar.Text>{t('Notifications_Preferences')}</VerticalBar.Text>
				{handleClose && <VerticalBar.Close onClick={handleClose} />}
			</VerticalBar.Header>
			<VerticalBar.ScrollableContent>
				<NotificationPreferencesForm notificationOptions={notificationOptions} handlePlaySound={handlePlaySound} />
			</VerticalBar.ScrollableContent>
			<VerticalBar.Footer>
				<ButtonGroup stretch>
					{handleClose && <Button onClick={handleClose}>{t('Cancel')}</Button>}
					<Button primary disabled={!isDirty} onClick={handleSave}>
						{t('Save')}
					</Button>
				</ButtonGroup>
			</VerticalBar.Footer>
		</>
	);
};

export default NotificationPreferences;
