﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ASC.Web.Community.Forum.Core.Module {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "4.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    public class ForumPatternResource {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal ForumPatternResource() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        public static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("ASC.Web.Community.Modules.Forum.Core.Module.ForumPatternResource", typeof(ForumPatternResource).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        public static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to h1.New Post in Forum Topic: &quot;$TopicTitle&quot;:&quot;$PostURL&quot;
        ///
        ///$Date &quot;$UserName&quot;:&quot;$UserURL&quot; has created a new post in the &quot;$TopicTitle&quot;:&quot;$PostURL&quot; topic:
        ///
        ///$PostText
        ///
        ///&quot;Read More&quot;:&quot;$PostURL&quot;.
        /// </summary>
        public static string pattern_PostInTopicEmailPattern {
            get {
                return ResourceManager.GetString("pattern_PostInTopicEmailPattern", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to h1.New Topic in Forums: &quot;$TopicTitle&quot;:&quot;$TopicURL&quot;
        ///
        ///$Date &quot;$UserName&quot;:&quot;$UserURL&quot; has created a new topic: &quot;$TopicTitle&quot;:&quot;$TopicURL&quot;
        ///
        ///$PostText
        ///
        ///&quot;Read More&quot;:&quot;$PostURL&quot;.
        /// </summary>
        public static string pattern_TopicInForumEmailPattern {
            get {
                return ResourceManager.GetString("pattern_TopicInForumEmailPattern", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Community. New post in forum topic: $TopicTitle.
        /// </summary>
        public static string subject_PostInTopicEmailPattern {
            get {
                return ResourceManager.GetString("subject_PostInTopicEmailPattern", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Community. New post in forum topic: [$TopicTitle]($PostURL).
        /// </summary>
        public static string subject_PostInTopicEmailPattern_tg {
            get {
                return ResourceManager.GetString("subject_PostInTopicEmailPattern_tg", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Community. New topic in forums: $TopicTitle.
        /// </summary>
        public static string subject_TopicInForumEmailPattern {
            get {
                return ResourceManager.GetString("subject_TopicInForumEmailPattern", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Community. New topic in forums: [$TopicTitle]($PostURL).
        /// </summary>
        public static string subject_TopicInForumEmailPattern_tg {
            get {
                return ResourceManager.GetString("subject_TopicInForumEmailPattern_tg", resourceCulture);
            }
        }
    }
}
