import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Checkboxes from '@/components/Checkbox';
import ButtonGroup from '@/components/ButtonGroup';
import Button from '@/components/Button';

export const metadata:Metadata = {
    title: 'ChooseAccount',
};

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */

const Page:React.FC = function Page() {
    const pageTitle:string = (
        typeof metadata.title === 'string'
            ? metadata.title
            : 'Social Security Scotland'
    );

    return (
        <>
        <Wrapper>
            <PageHeader
                title={pageTitle}
                metadata={[
                {
                    name: 'Last updated',
                    value: <time>July 20th 2023</time>,
                },
                    ]}
            />
        </Wrapper>
        <Wrapper>
            <h2>Checkboxes</h2>
                <Checkboxes
                    name="checkboxes-default"
                    id="checkboxes-default"
                    label="What topics are you interested in?"
                    hintText="Select as many as you like"
                    items={[
                        {
                            label: 'Education',
                            value: 'education',
                        },
                        {
                            label: 'Housing',
                            value: 'housing',
                        },
                        {
                            label: 'Transport',
                            value: 'transport',
                        },
                    ]}
                />

        </Wrapper>
        <Wrapper>
        <h2>Buttons</h2>
                <h3>Styles</h3>
                <ButtonGroup>
                    <Button 
                        variants="secondary"
                        icon='chevron_left'
                        iconSide='left'
                        href='/'
                    >
                            Back
                    </Button>
                    <Button 
                        icon='chevron_right'
                        href='/'
                    >
                        Continue
                    </Button>
                </ButtonGroup>
        </Wrapper>
        </>

    );
}

export default Page;

