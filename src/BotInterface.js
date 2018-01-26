/* @flow */

/**
 * Bot
 */
export interface BotInterface
{
    setup(services:*);

    /**
     * Execute the bot
     */
    execute(services:*, now:number);
}
