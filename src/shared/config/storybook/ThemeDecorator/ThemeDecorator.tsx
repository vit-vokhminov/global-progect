import { Story } from '@storybook/react';
// eslint-disable-next-line fsd-vit-plugin/layer-imports-vit
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`App ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );