import { defaultModel } from "../core/chat/openai";
import { OptionGroup } from "../core/options/option-group";

export const parameterOptions: OptionGroup = {
    id: 'parameters',
    options: [
        {
            id: "model",
            defaultValue: defaultModel,
            resettable: false,
            scope: "user",
            displayOnSettingsScreen: "chat",
            displayAsSeparateSection: true,
            displayInQuickSettings: {
                name: "Model",
                displayByDefault: true,
                label: (value) => value,
            },
            renderProps: (value, options, context) => ({
                type: "select",
                label: "Model",
                description: value?.includes('32') && context.intl.formatMessage(
                    {
                        defaultMessage: "Note: This model will only work if your OpenAI account has been granted you have been given access to it. <a>Request access here.</a>",
                    },
                    {
                        a: (text: string) => <a href="https://openai.com/waitlist/gpt-4-api" target="_blank" rel="noreferer">{text}</a>
                    } as any,
                ),
                options: [
                    {
                        label: "gpt-4o-mini (snapshot: 2024-07-18) [default]",
                        value: "gpt-4o-mini-2024-07-18",
                    },
                    {
                        label: "gpt-4o-mini (latest version)",
                        value: "gpt-4o-mini",
                    },
                    {
                        label: "gpt-4o (snapshot: 2024-05-13)",
                        value: "gpt-4o-2024-05-13",
                    },
                    {
                        label: "gpt-4o (snapshot: 2024-08-06)",
                        value: "gpt-4o-2024-08-06",
                    },
                    {
                        label: "gpt-4o (latest version)",
                        value: "gpt-4o",
                    },
                ],
            }),
        },
        {
            id: "temperature",
            defaultValue: 0.5,
            resettable: true,
            scope: "chat",
            displayOnSettingsScreen: "chat",
            displayAsSeparateSection: true,
            displayInQuickSettings: {
                name: "Temperature",
                displayByDefault: false,
                label: (value) => "Temperature: " + value.toFixed(1),
            },
            renderProps: (value, options, context) => ({
                type: "slider",
                label: "Temperature: " + value.toFixed(1),
                min: 0,
                max: 1,
                step: 0.1,
                description: context.intl.formatMessage({ defaultMessage: "The temperature parameter controls the randomness of the AI's responses. Lower values will make the AI more predictable, while higher values will make it more creative." }),
            })
        }
    ]
};
