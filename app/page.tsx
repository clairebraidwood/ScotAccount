import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Checkboxes from '@/components/Checkbox';
import ButtonGroup from '@/components/ButtonGroup';
import Button from '@/components/Button';

export const metadata:Metadata = {
    title: 'Create an account or sign in',
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
            <p>
                You'll need to use an online account to continue. This lets you save the application
                 as you go, so you can leave and come back to it when suits you. It also keeps the 
                 information you give us secure. 
            </p>
            <p>     
                 If using a public computer, make sure to log out when finished. If you do not, 
                 it may be possible for your application to be viewed by the next person to use the 
                 computer. 
                 
            </p>
        </Wrapper>

        <Wrapper>
            <ButtonGroup>
                    <Button 
                        icon='chevron_right'
                        iconSide='right'
                        href='/create1'
                    >
                            Create an account
                    </Button>
                    
                </ButtonGroup>      
        </Wrapper>

        <Wrapper>
            <h2>
                Already have an account?
            </h2>
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
                        href='/test-route'
                    >
                            Back
                    </Button>
                    <Button 
                        icon='chevron-right'
                        href='/test-route'
                    >
                        Continue
                    </Button>
                </ButtonGroup>
        </Wrapper>
        </>

    );
}

export default Page;
